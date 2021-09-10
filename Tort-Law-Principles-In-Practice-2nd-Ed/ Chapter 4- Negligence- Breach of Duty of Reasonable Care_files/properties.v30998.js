fbAppId = {
	"local" : "311854842303001",
"dev" : "739278082790731",
"qa" : "1482631395303267",
"staging" : "1504668552926984",
"prod" : "1862965110641440"
//old fbAppId for Stg
////"staging" : "1504916823072601",
////old fbAppId for Prod
////"prod" : "800312676659508"
};

captchaPubKeys = {
	"local" : "6Le9m_MSAAAAAFoeiSXHEdjs0ki2S48fxD4NwwKf",
	"dev" : "6Le9m_MSAAAAAFoeiSXHEdjs0ki2S48fxD4NwwKf",
	"qa" : "6Le9m_MSAAAAAFoeiSXHEdjs0ki2S48fxD4NwwKf",
	"staging" : "6Le9m_MSAAAAAFoeiSXHEdjs0ki2S48fxD4NwwKf",
        "prod"  : "6Le9m_MSAAAAAFoeiSXHEdjs0ki2S48fxD4NwwKf"
};

brightcovePlayer = {
    "playerID": "3629462730001",
    "playerKey": "AQ~~,AAAABNa5hoE~,ruH2nxQOkuQA2rTuHVFj9aEJ1V2vNuMp",
        "width" : "640",
        "height" : "360"
}
GACode = {
        "local" : "UA-52442552-3",
        "dev" : "UA-52442552-3",
        "qa" : "UA-52442552-3",
        "staging" : "UA-52442552-1",
        "prod" : "UA-52442552-2"
}

debugMode = {
        "local" : "On",
        "dev" : "On",
        "qa" : "Off",
        "staging" : "Off",
        "prod" : "Off"
};

ggl_reCaptcha={
	"switch":true, //true(ON) or false(OFF)
	"dev" : "6LdjUsYUAAAAAEZrVmHw4ZNsVhDGIl-StBlxgh8s",
	"qa" : "6Lf7XMIUAAAAALI5_nbCb1R46jSKeEnZ1-BasmtL",
	"staging" : "6LfWXMIUAAAAAMO1dkAGbZZhCrutT_uu_16ZxLYl",
	"prod" : "6LfpJ8IUAAAAAN-Nexs-CUnq8_ua1OSNIrv88mgT"
}

exceptionMsg = {
  "sessionMgmt"           : "An error occurred. Please log in again.",
  "system"                : "An error occurred. Please log in again.",
  "systemError"           : "A system exception occurred. Please try again.",
  "existingHightlight"    : "You cannot highlight an existing highlight.",
  "existingTable"         : "You cannot highlight a table.",
  "existingSection"       : "Please highlight either the section heading or the section text, not both.",
  "highlightOneParagraph" : "You can only highlight within one paragraph at a time.",
  "topMostSection"        : "You are already in the topmost section",
  "invalidPageNo"         : "Invalid page number.",
  "enterValidSearch"      : "Please enter a valid search term",
  "enterSearchTerm"       : "Please enter a search term",
  "highlightChapters"     : "Highlighting is only enabled within chapters.",
  "deletePlaceHolder"     : "Cannot delete place-holder.",
  "outlineNotSaved"       : "Modifications done are not saved. Please try after some time.",
  "enterTitleToSave"      : "Please enter a title or some content to save your outline.",  
  "existingAnnotation"    : "You cannot highlight an existing annotation."
};

  connectQuizzing ={
   "clientCode": "LE-CQuiz",
   "secretKey": "F5#c_NL3tw",
}

properties = {
	"dev" : "http://54.84.41.76/wkconnects/rest",
	"local" : "http://qa.casebookconnect.com/wkconnects/rest",
	"qa" : "http://qa.casebookconnect.com/wkconnects/rest",
	"staging" : "https://staging.casebookconnect.com/wkconnects/rest",
        "prod" : "https://www.casebookconnect.com/wkconnects/rest",
        "themisUrl": "https://www.themisbar.com/",
        "quizzingPlatform" : "https://qp.hlrptech.com",
	"ui_domain" : "/",
	"full_base_url" : "https://www.casebookconnect.com/",
	"env" : "prod"
};


/**
  The below list of words given in the array are the stop-words which will have the below implementation.
  
  If the user enters search term which is:

    only one word and that is part of stop words array, then stop the server request being fired and show an user friendly message.
    multiple words/sentence and all of them are part of stop words array, then stop the server request being fired and show an user friendly message.
    only one word that is not part of stop word array, then fire the request to search and display the result in UI.
    multiple words/sentence which might/might not have one or more words but not all words that are part of stop words array, then fire the request to search and display the result in UI.
    all "dddddddd","cccccc","11111111", "C.*", "*.*" etc., it will not be handled in the UI, fire the request to search and display the result in UI.
*/
stopWords = ["a","about","above","across","after","again","all","almost","alone","along","already","also","although","always","among","an","and","another","any","anybody","anyone","anything","anywhere","are","area","areas","around","as","ask","asked","asking","asks","at","away","b","back","backed","backing","backs","be","became","because","become","becomes","been","before","began","behind","being","beings","best","better","between","big","both","but","by","c","came","can","cannot","case","cases","certain","certainly","clear","clearly","come","could","d","did","differ","different","differently","do","does","done","down","down","downed","downing","downs","during","e","each","early","either","end","ended","ending","ends","enough","even","evenly","ever","every","everybody","everyone","everything","everywhere","f","face","faces","fact","facts","far","felt","few","find","finds","first","for","four","from","full","fully","further","furthered","furthering","furthers","g","gave","general","generally","get","gets","give","given","gives","go","going","good","goods","got","great","greater","greatest","group","grouped","grouping","groups","h","had","has","have","having","he","her","here","herself","high","high","high","higher","highest","him","himself","his","how","however","i","if","important","in","interest","interested","interesting","interests","into","is","it","its","itself","j","just","k","keep","keeps","kind","knew","know","known","knows","l","large","largely","last","later","latest","least","less","let","lets","like","likely","long","longer","longest","m","made","make","making","man","many","may","me","member","members","men","might","more","most","mostly","mr","mrs","much","must","my","myself","n","necessary","need","needed","needing","needs","never","new","new","newer","newest","next","no","nobody","non","noone","not","nothing","now","nowhere","number","numbers","o","of","off","often","old","older","oldest","on","once","one","only","open","opened","opening","opens","or","order","ordered","ordering","orders","other","others","our","out","over","p","part","parted","parting","parts","per","perhaps","place","places","point","pointed","pointing","points","possible","present","presented","presenting","presents","problem","problems","put","puts","q","quite","r","rather","really","right","right","room","rooms","s","said","same","saw","say","says","second","seconds","see","seem","seemed","seeming","seems","sees","several","shall","she","should","show","showed","showing","shows","side","sides","since","small","smaller","smallest","so","some","somebody","someone","something","somewhere","state","states","still","still","such","sure","t","take","taken","than","that","the","their","them","then","there","therefore","these","they","thing","things","think","thinks","this","those","though","thought","thoughts","three","through","thus","to","today","together","too","took","toward","turn","turned","turning","turns","two","u","under","until","up","upon","us","use","used","uses","v","very","w","want","wanted","wanting","wants","was","way","ways","we","well","wells","went","were","what","when","where","whether","which","while","who","whole","whose","why","will","with","within","without","work","worked","working","works","would","x","y","year","years","yet","you","young","younger","youngest","your","yours","z","/", "\\","","+"];
