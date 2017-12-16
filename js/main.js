
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
	e.preventDefault();
}

function fetchBookmarks()
{
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	var BookmarkResult = document.getElementById('BookmarkResult');

	BookmarkResult.innerHTML='Hello world';
}
