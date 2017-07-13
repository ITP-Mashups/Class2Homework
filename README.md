# Class2Homework

Journal Entry
The assignment was to format a web page using API data. I chose the World Bank indicator list, which comes in JSON format. The url for getting all the indicators was quite straightforward, but the rest of the documentaiton - for selecting countries or date ranges and specifying repsonse format was a little denser. I stuck wiht the simple list - which i could visualize all at once.  I spent a bit of time reviewing the CORS issues and JSONP options and finaly settled on a Chrome plugin to handle the header issues, as my attempts at implementing CORS i Javascript didn't quite work out. Reasons became clear after having done the reading!
I use Brackets for web development, which made styling and viewing the results very easy.  As always, W3Schools help on styling tables was a great help.
One thing I'd like to work on further is accessing the data from the API outside of the get request function. I couldn't create a global variable for the response data, which doesn't quite matter in simple pages but may be useful in more complex pages. I also could have gone down into the nested layers of the json return for table information, but left it at first layer info for ease of access.

![World Bank Indicators Screenshot](https://github.com/lanimc/Class2Homework/blob/master/IndicatorsScreenshot.png)
