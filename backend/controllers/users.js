import user from "../models/user"

const users = {
    renderLogin: (req, res) => {
        res.render("user/login");
    },

    login: (req, res) => {
        req.flash("success", "welcome back!");
        const redirectUrl = req.session.returnTo || "/request-form";
        delete req.session.returnTo;
        res.redirect(redirectUrl);
    }
}

export default users