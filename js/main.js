
document.getElementById('myform').addEventListener('submit',saveBookmark);

function saveBookmark(e)
{
	console.log('It works ..')

	var SiteName = document.getElementById('SiteName').value;
	var SiteUrl = document.getElementById('SiteUrl').value;

	var Bookmark ={

		name: SiteName,
		url : SiteUrl
	}

	/*
	localStorage.setItem('test','Hello world');
	console.log(localStorage.getItem('test'));
	localStorage.removeItem('test');
	console.log(localStorage.getItem('test'));

	*/
	if(localStorage.getItem('bookmarks') === null)
	{
		var bookmarks = [];

		bookmarks.push(Bookmark);

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	else{

		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		bookmarks.push(Bookmark);

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	}

	fetchBookmarks();
	e.preventDefault();
}

function deleteBookmark(url)
{
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	for(var i = 0; i < bookmarks.length; i++)
	{
		if(bookmarks[i].url == url)
		{
			bookmarks.splice(i,1);
		}
	}

	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	fetchBookmarks();
}

function fetchBookmarks()
{
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	var BookmarkResult = document.getElementById('BookmarkResult');

	BookmarkResult.innerHTML=' ';

	for(var i = 0; i < bookmarks.length; i++)
	{
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		BookmarkResult.innerHTML += '<div class= "well">'+
																'<h3>' + name+
																'<a class ="btn btn-default" target="_blank" href="'+url+'"> visit </a>' +
																'<a onclick="deleteBookmark('\' + url + '\')" class = "btn btn-danger" href = "#"> Delete </a>' +
																'</h3>' +
																'</div>';
	}
}
