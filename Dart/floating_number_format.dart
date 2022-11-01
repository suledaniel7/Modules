String main() {
  String numStr = '0012033456.954';
  int trailingIndex = numStr.indexOf('.');
  String trailing = '.00';
  if (trailingIndex > -1) {
    trailing = numStr.substring(trailingIndex);
    if (trailing.length == 2) {
      trailing += '0';
    }
    if (trailing.length == 1) {
      trailing += '00';
    }
    numStr = numStr.substring(0, trailingIndex);
  }

  numStr = stripLeading(numStr);
  String fStr = '';
  int lt = numStr.length;
  int count = lt ~/ 3;
  List<String> strBits = [];

  for (int i = 0; i < count; i++) {
    String tmpStr = numStr.substring(numStr.length - 3);
    strBits.add(tmpStr);
    numStr = numStr.substring(0, numStr.length - 3);
  }

  if (numStr.length > 0) {
    strBits.add(numStr);
  }

  List<String> revStr = strBits.reversed.toList();

  revStr.forEach((element) {
    fStr += element;
    fStr += ',';
  });
  if (revStr.length > 0) {
    fStr = fStr.substring(0, fStr.length - 1);
  } else {
    fStr = '0';
  }
  fStr += trailing;
  print(fStr);
  return fStr;
}

String stripLeading(String numbStr) {
  if (numbStr.indexOf('0') == 0) {
    numbStr = numbStr.substring(1);
    if (numbStr.indexOf('0') == 0) {
      numbStr = stripLeading(numbStr);
    }
  }
  return numbStr;
}
