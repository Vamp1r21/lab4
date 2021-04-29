% rebase('layout.tpl', title='Home Page', year=year)

<div class="jumbotron">
    <h1>JSC "Horns and Hooves"</h1>
    <p class="lead">The best IT university in Russia, has been operating since 95. We train the best specialists in the CIS.</p>
    <p><a href="http://bottlepy.org/docs/dev/index.html" class="btn btn-primary btn-large">Why we use Google Translate for our site?</a></p>
</div>

<div class="row">
    <div class="col-md-4">
        <h2>Admission</h2>
        <p>
            We train specialists in several areas: programming, web design, system administration and cybersecurity.
            Find out more about training directions, prices, competition and number of places.
        </p>
        <p><a class="btn btn-default" href="/about">Admission information</a></p>
    </div>
    <div class="col-md-4">
        <h2>Our achivements</h2>
        <p>Our top 10 students received a Darwin Award last year for their in-depth study of the human impact of a fiber backbone laser.</p>
    </div>
    <div class="col-md-4">
        <h2>Contact information</h2>
        <p>Our university is located in a picturesque pine forest, not far from the city of Ukhta. The priority way of communication for us is pigeon mail, since we do not always have an internet. Please do not send owls instead of pigeons.</p>
        <p><a class="btn btn-default" href="/contact">Send pigeon</a></p>
    </div>
</div>
<h3> Ask a Question </h3>
<form action="/home" method="post">
        <p><textarea rows="2" cols="50" name="QUEST" placeholder="Your question"></textarea></p> 
        <p><input type="text" size="50" name="ADRESS" placeholder="Your email"></p>
        <p><input type="submit" value="Send" class="btn btn-default"></p>
</form>
