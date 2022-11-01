void main() {
  String text =
      "Hello #there. This is a #new #day.\n\n#Trying out #this* with them. See, *#the thing is, um... I'm not #sure";
  RegExp limiter = new RegExp(r'\s|[^\w|#]');
  List<Map<dynamic, dynamic>> finals = [];
  List<String> textArr = text.split(new RegExp(r'\s|\n'));
  List<String> sepArr = extractSpaces(text);
  print(sepArr);
  int sepIndex = -1;
  textArr.forEach((element) {
    sepIndex++;
    bool hashFound = false;
    if (element.length > 0) {
      if (element[0] == '#') {
        if (element.substring(1).indexOf(new RegExp(r'\W')) != 0) {
          hashFound = true;
          List<String> tagArr = element.split(limiter);
          if (tagArr.length == 1) {
            finals.add({
              'text': element,
              'tag': hashFound,
            });

            if (sepIndex < sepArr.length) {
              finals.add({
                'text': sepArr[sepIndex],
                'tag': false,
              });
            }
          } else {
            finals.add({
              'text': tagArr[0],
              'tag': hashFound,
            });

            int tLen = tagArr[0].length;
            String postTag = element.substring(tLen);

            finals.add({
              'text': postTag,
              'tag': false,
            });

            if (sepIndex < sepArr.length) {
              finals.add({
                'text': sepArr[sepIndex],
                'tag': false,
              });
            }
          }
        } else {
          finals.add({
            'text': element,
            'tag': hashFound,
          });

          if (sepIndex < sepArr.length) {
            finals.add({
              'text': sepArr[sepIndex],
              'tag': false,
            });
          }
        }
      } else {
        finals.add({
          'text': element,
          'tag': hashFound,
        });

        if (sepIndex < sepArr.length) {
          finals.add({
            'text': sepArr[sepIndex],
            'tag': false,
          });
        }
      }
    } else {
      finals.add({
        'text': element,
        'tag': hashFound,
      });

      if (sepIndex < sepArr.length) {
        finals.add({
          'text': sepArr[sepIndex],
          'tag': false,
        });
      }
    }
  });

  String temp = '';
  for (int i = 0; i < finals.length; i++) {
    temp += finals[i]['text'];
  }
  print(finals);
  print(temp);
}

List<String> extractSpaces(String text) {
  List<String> spaces = [];
  String tempText = text;
  int spaceIndex = text.indexOf(new RegExp(r'\s|\n'));
  while (spaceIndex > -1) {
    spaces.add(tempText[spaceIndex]);
    tempText = tempText.substring(spaceIndex + 1);
    spaceIndex = tempText.indexOf(new RegExp(r'\s|\n'));
  }
  return spaces;
}
