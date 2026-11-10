import jwt from "jsonwebtoken";
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res
                .status(401)
                .json({ message: "Please Login - No auth headers provided" });
            return;
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Please Login - Token is missing" });
            return;
        }
        const decodedValue = jwt.verify(token, process.env.JWT_SEC);
        if (!decodedValue || !decodedValue.user) {
            res.status(401).json({
                message: "Invalid Token",
            });
            return;
        }
        req.user = decodedValue.user;
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Please Login - JWT Token Error" });
    }
};
