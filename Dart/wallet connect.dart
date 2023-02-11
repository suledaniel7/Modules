import 'dart:io';
import 'package:mobile/services/temp.dart';
import 'package:algorand_dart/algorand_dart.dart';
import 'package:walletconnect_dart/walletconnect_dart.dart';
import 'package:web3dart/web3dart.dart';

WalletConnect? wConnector;
SessionStatus? walletSession;
AlgorandWalletConnectProvider? provider;
final EthereumAddress receiverAddr =
    EthereumAddress.fromHex('0xB45680b024048352f5a817BEeF68d7c0EF354a40');
String rec = "0xB45680b024048352f5a817BEeF68d7c0EF354a40";

connectWallet() async {
  // Create a connector
  wConnector = WalletConnect(
    bridge: 'https://bridge.walletconnect.org',
    clientMeta: const PeerMeta(
      name: 'Red Onion',
      description: 'Red Onion Mobile App',
      url: 'https://redonion.io',
      icons: [
        'https://firebasestorage.googleapis.com/v0/b/pisi-exchange.appspot.com/o/icon-white.png?alt=media&token=23efbbea-f283-45b3-8ab8-d5e8f57a849c'
      ],
    ),
  );

  provider = AlgorandWalletConnectProvider(wConnector!);

  // Create a new session
  if (walletSession == null) {
    final session = await wConnector!
        .createSession(
      chainId: 4160,
      onDisplayUri: (uri) {
        print('URI BELOW:');
        print('-------------------------');
        print(uri);
        Utilities().launchUrl(uri);
      },
    )
        .then((value) {
      walletSession = value;
      print("Wallet connected successfully");
    }).catchError((err) {
      print(err);
      print("Error while connecting to wallet");
    });
  } else {
    print('that happened');
    wConnector!.connect().then((value) {
      walletSession = value;
    });
  }

  // wConnector!.connect().then((value) {
  //   print('connected?');
  // }).catchError((val) {
  //   print('rejected');
  // });
}

void createTransaction() async {
  if (walletSession != null) {
    final algorand = Algorand(
      algodClient: AlgodClient(apiUrl: AlgoExplorer.TESTNET_ALGOD_API_URL),
    );
    print(walletSession);
    // KTFZ5SQU3AQ6UFYI2QOWF5X5XJTAFRHACWHXAZV6CPLNKS2KSGQWPT4ACE
    final sender =
        Address.fromAlgorandAddress(address: walletSession!.accounts[0]);
    final params = await algorand.getSuggestedTransactionParams();

    // Build the transaction
    final tx = await (PaymentTransactionBuilder()
          ..sender = sender
          ..noteText = 'Signed with WalletConnect'
          ..amount = Algo.toMicroAlgos(0.0001)
          ..receiver = sender
          ..suggestedParams = params)
        .build();

    // Sign the transaction
    final signedBytes = await provider!.signTransaction(
      tx.toBytes(),
      params: {
        'message': 'Escrow Transaction to Red Onion',
      },
    );

    // Broadcast the transaction
    final txId = await algorand.sendRawTransactions(
      signedBytes,
      waitForConfirmation: true,
    );

    // Kill the session
    wConnector!.killSession();
    print('----------------TX ID Follows----------------------');
    print(txId);
    if (mounted) {
      Utilities().alert(
        context,
        false,
        "Transaction completed successfully!",
      );
    }
  } else {
    Utilities().alert(
      context,
      true,
      "Please connect your Wallet then attempt this operation again",
    );
    connectWallet();
  }
}

@override
void dispose() {
  if (wConnector != null) {
    if (wConnector!.connected) {
      wConnector!.killSession();
    }
  }
  super.dispose();
}
