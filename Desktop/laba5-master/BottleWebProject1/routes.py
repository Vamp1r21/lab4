"""
Routes and views for the bottle application.
"""

from bottle import route, view
from datetime import datetime
import online1

@route('/')
@route('/home')
@view('index')
def home():
    """Renders the home page."""
    return dict(
        year=datetime.now().year
    )

@route('/contact')
@view('contact')
def contact():
    """Renders the contact page."""
    return dict(
        title='Contact',
        message='Your contact page.',
        year=datetime.now().year
    )

@route('/about')
@view('about')
def about():
    """Renders the about page."""
    return dict(
        title='Reception company 2077',
        message='Our university has the following areas where you can go to study: ',
        year=datetime.now().year
    )

@route('/online')
@view('online')
def online():
    """Renders the contact page."""
    getOnline=online1.get_all_onlines();
    return dict(
        title='Online',
        onlines=getOnline,
        message='Your contact page.',
        year=datetime.now().year
    )
@route('/registration')
@view('registration')
def about():
    """Renders the about page."""
    return dict(
        title='Reception company 2077',
        message='Our university has the following areas where you can go to study: ',
        year=datetime.now().year
    )
