PRODUCTNAME := redmine-enhancer
COREFILES := redmine.js Icon-16.png Icon-48.png Icon-64.png Icon-128.png

all: safari chrome

safari:
	mkdir $(PRODUCTNAME).safariextension
	cp $(COREFILES) Info.plist ./$(PRODUCTNAME).safariextension

chrome:
	mkdir $(PRODUCTNAME).chromeextension
	cp $(COREFILES) manifest.json ./$(PRODUCTNAME).chromeextension

clean:
	rm -rf $(PRODUCTNAME).safariextension $(PRODUCTNAME).chromeextension