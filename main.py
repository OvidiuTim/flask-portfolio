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
    name: Mapped[str] = mapped_column(String(250), nullable=False)
    email: Mapped[str] = mapped_column(String(250), nullable=False)
    phone: Mapped[str] = mapped_column(String(250), nullable=False)
    message: Mapped[str] = mapped_column(String(5000), nullable=False)


with app.app_context():
    db.create_all()



@app.route("/", methods=["GET", "POST"])
def home():
    form_send = True
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
        return render_template("thanks.html")

    return render_template("index.html", form_send=form_send)



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



@app.route("/thankyou")
def thanks():
    return render_template("thanks.html")




@app.route("/api/messages", methods=["GET"])
def get_messages():
    messages = Form.query.all()
    return jsonify([{
        "id": msg.id,
        "name": msg.name,
        "email": msg.email,
        "phone": msg.phone,
        "message": msg.message
    } for msg in messages])




@app.route("/pt", methods=["GET", "POST"])
def home_pt():
    form_send = True
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
        return render_template("thanks.html")

    return render_template("index_pt.html", form_send=form_send)












if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
