""" contains the routes of the application"""
import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


# creates an instance of flask and assign it to the app variable
app = Flask(__name__)

# Environment variables
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route('/home')
def home():
    """
    On page load, or when redirected to /home, home page is rendered.

    """
    return render_template('index.html')


@app.route("/register", methods=["GET", "POST"])
def register():
    """
    Allows new user registration.

    To enable registration first it checks if
    username and/ or email already exist in database.
    If it doesn't exist, registration is carried out by
    storing username, email and password onto database.
    Password is hashed for password security.
    once registration is done, a session cookie is started
    and a flash message is triggered.
    """

    if request.method == "POST":
        # check if username already exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            return redirect(url_for("register"))

            # check if email already exists in db"""
        existing_user = mongo.db.users.find_one(
            {"email": request.form.get("email").lower()})

        if existing_user:
            flash("Email already exists")
            return redirect(url_for("register"))

        new_user = {
            "username": request.form.get("username").lower(),
            "email": request.form.get("email").lower(),
            "password": generate_password_hash(
                            request.form.get("password"))
        }
        mongo.db.users.insert_one(new_user)

        # put the new user into "session" cookie
        session["user"] = request.form.get("username").lower()
        flash("You are now registered!")
        return redirect(url_for("set_goals", username=session["user"]))

    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    """
    Logs in the registered user

    First checks if username already exists in database.
    If it is an existing username, password is then verified. Flash
    message will appear if password is successfully verified,
    the user is logged in and a session cookie is started.

    Otherwise, the user is redirected to login page and flash message
    will appear letting the user know that either username or
    password was incorrect.
    """
    if request.method == "POST":
        # check if username already exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # ensure hashed password matched user inputß
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome {}".format(request.form.get("username")))
                return redirect(url_for("set_goals", username=session["user"]))

        else:
            # username doesn't exist
            flash("incorrect username and/or password")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.route("/set_goals")
def set_goals():
    """
    renders my goals page
    """
    goals = list(mongo.db.goals.find())
    return render_template("goals.html", goals=goals)


@app.route("/set_goals?<username>", methods=["GET", "POST"])
def profile(username):
    """
    renders only the user's data


    it obtains the session user's username from db and renders
    only the user's data in my goals page.
    """
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    if session["user"]:
        return render_template("goals.html", username=username)

    return redirect(url_for("login"))


@app.route("/logout")
def logout():
    """
    Logs out the user

    removes user from session cookies and triggers flash message
    """
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("login"))


@app.route("/new_goal", methods=["GET", "POST"])
def new_goal():
    """"
    Adds new goal

    Stores user input into mongo database and renders  new goal page.
    If data is added onto database, flash message is triggered and
    my goals page is rendered.
    """
    if request.method == "POST":
        add_goal = {
            "goal_title": request.form.get("goal_title"),
            "category_name": request.form.get("category_name"),
            "goal_image": request.form.get("goal_image"),
            "goal_description": request.form.get("goal_description"),
            "due_date": request.form.get("due_date"),
            "author": session["user"]
            }

        mongo.db.goals.insert_one(add_goal)
        flash("Goal Added")
        return redirect(url_for("set_goals"))

    categories = mongo.db.categories.find().sort("category_name", 1)
    return render_template("new-goal.html", categories=categories)


@app.route("/edit_goal/<goal_id>", methods=["GET", "POST"])
def edit_goal(goal_id):
    """"
    Updates existing goal

    Updates user input into mongo database and renders  edit-goal.html
    (copy of new goal page with fields pre filled with current data).
    If data is updated onto database, flash message is triggered and
    my goals page is rendered with updated data.
    """
    if request.method == "POST":
        update_goal = {
            "goal_title": request.form.get("goal_title"),
            "goal_image": request.form.get("goal_image"),
            "goal_description": request.form.get("goal_description"),
            "due_date": request.form.get("due_date"),
            "author": session["user"]
            }

        mongo.db.goals.update({"_id": ObjectId(goal_id)}, update_goal)
        flash("Goal Updated")
        return redirect(url_for("set_goals"))

    goal = mongo.db.goals.find_one({"_id": ObjectId(goal_id)})
    return render_template("edit-goal.html", goal=goal)


@app.route("/delete_goal/<goal_id>")
def delete_goal(goal_id):
    """"
    Deletes existing goal

    Deletes goal from mongo database and renders my
    goals page without deleted data.
    When goal is deleted a flash message is triggered.
    """
    mongo.db.goals.remove({"_id": ObjectId(goal_id)})
    flash("Goal Deleted")
    return redirect(url_for("set_goals"))


@app.route('/how_to')
def how_to():
    """
    renders how to page
    """
    return render_template('how-to.html')


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
