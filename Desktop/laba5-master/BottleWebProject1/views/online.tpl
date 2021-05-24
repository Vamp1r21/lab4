% rebase('layout.tpl', title=title, year=year)

<h2>Online</h2>
	%for online in onlines:
	<h3 class = "online_name"><div class="col-12">{{online['name']}}</div></h3>
	%end