% rebase('layout.tpl', title=title, year=year)


<div class="jumbotron">
<form class="form" method="post">
        <label class="form__label">
            Enter your name: <input class="form__input" type="text" name="NAME"/>
        </label>
        <label class="form__label">
            Enter your email: <input class="form__input" type="email" name="EMAIL"/>
        </label>
        <button class="form__submit" type="submit">Create</button>
    </form>
</div>