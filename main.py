from flask import Flask, render_template, request, jsonify
import smtplib
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String, Boolean


app = Flask(__name__)

# CREATE DB
class Base(DeclarativeBase):
    pass
# Connect to Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///forms.db'
db = SQLAlchemy(model_class=Base)
db.init_app(app)



# form TABLE Configuration
class Form(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(250), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(500), nullable=False)
    phone: Mapped[str] = mapped_column(String(500), nullable=False)
    message: Mapped[str] = mapped_column(String(250), nullable=False)


with app.app_context():
    db.create_all()



@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        new_form = Form(
            name=request.form.get("name"),
            email=request.form.get("email"),
            phone=request.form.get("phone"),
            message=request.form.get("message"),
        )
        db.session.add(new_form)
        db.session.commit()
        
        # Return a JSON response instead of JavaScript
        return jsonify({"success": True, "message": "Your form was submitted successfully!"})

    return render_template("index.html")



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
