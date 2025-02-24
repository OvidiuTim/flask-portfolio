from flask import Flask, render_template, redirect, url_for
from flask import Flask, render_template, request
import smtplib
import requests



app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():
    show_form=True

    if request.method == "POST":

        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        message = request.form["message"]
        # with open("example.txt", "a") as file:
        #     file.write(f"Name: {name}, msg: {message}")

        
        myemail = "pirvu177@gmail.com"
        password = "cula gyqb ypmm owlf "
        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(user=myemail, password=password)
            connection.sendmail(from_addr=myemail,
                                to_addrs=myemail,
                                msg=f"Subject:New Message \n\nName {name},  {email}, {phone},{message} ")
            connection.close()
        show_form=False
        print(show_form)
        return render_template("index.html",  show_form=show_form)
    print(show_form)
    return render_template("index.html",  show_form=show_form)





@app.route("/project/thelakehome")
def thelake():
    return render_template("thelakehome.html")


@app.route("/project/formwork")
def formwork():
    return render_template("formwork.html")


@app.route("/project/inventory")
def inventory():
    return render_template("inventory.html")

@app.route("/project/taskapp")
def taskapp():
    return render_template("taskapp.html")


@app.route("/project/wp")
def wordpress():
    return render_template("wordpress.html")



@app.route("/project/automations")
def automations():
    return render_template("automations.html")













if __name__ == '__main__':
    app.run(debug=True, port=5002)
