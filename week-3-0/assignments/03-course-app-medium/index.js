const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

try {
  ADMINS = JSON.parse(fs.readFileSync("./admins.json", "utf-8"));
  USERS = JSON.parse(fs.readFileSync("users.json", "utf-8"));
  COURSES = JSON.parse(fs.readFileSync("courses.json", "utf-8"));
} catch {
  ADMINS = [];
  USERS = [];
  COURSES = [];
}

const secret = "my-secret-key";

function authenticatejwt(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

// Admin routes
app.post("/admin/signup", (req, res) => {
  const { username, password } = req.body;
  const admin = ADMINS.find((a) => a.username === username);
  console.log("Admin signup");
  if (admin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    const newAdmin = { username, password };
    ADMINS.push(newAdmin);
    fs.writeFileSync("admins.json", JSON.stringify(ADMINS));
    const token = jwt.sign({ username, role: "admin" }, secret, {
      expiresIn: "1h",
    });
    res.json({ message: "Admin created succesfully", token });
  }
});

app.post("/admin/login", (req, res) => {
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, secret, {
      expiresIn: "1hr",
    });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.post("/admin/courses", authenticatejwt, (req, res) => {
  const course = req.body;
  course.id = COURSES.length + 1;
  COURSES.push(course);
  fs.writeFileSync("courses.json", JSON.stringify(COURSES));
  res.json({ message: "Course created successfully", courseId: course.id });
});

app.put("/admin/courses/:courseId", authenticatejwt, (req, res) => {
  const course = COURSES.find((c) => c.id === parseInt(req.params.courseId));
  if (course) {
    Object.assign(course, req.body);
    fs.writeFileSync("courses.json", JSON.stringify(COURSES));
    res.json({ message: "Course updated successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/admin/courses", authenticatejwt, (req, res) => {
  res.json({ courses: COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  const { username, password } = req.body;
  const existingUser = USERS.find((u) => u.username === username);
  if (existingUser) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = { username, password };
    USERS.push(newUser);
    fs.writeFileSync("users.json", JSON.stringify(USERS));
    const token = jwt.sign({ username, role: "user" }, secret, {
      expiresIn: "1hr",
    });
    res.json({ message: "User created successfully", token });
  }
});

app.post("/users/login", (req, res) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign({ username, role: "user" }, secret, {
      expiresIn: "1hr",
    });
    res.json({ message: "User logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.get("/users/courses", authenticatejwt, (req, res) => {
  res.json({ courses: COURSES });
});

app.post("/users/courses/:courseId", authenticatejwt, (req, res) => {
  const course = COURSES.find((c) => c.id === parseInt(req.params.courseId));
  if (course) {
    const user = USERS.find((u) => u.username === req.user.username);
    if (user) {
      if (!user.purchasedCourses) {
        user.purchasedCourses = [];
      }
      user.purchasedCourses.push(course);
      fs.writeFileSync("users.json", JSON.stringify(USERS));
      res.json({ message: "Course purchased successfully" });
    } else {
      res.status(403).json({ message: "User not found" });
    }
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/users/purchasedCourses", authenticatejwt, (req, res) => {
  const user = USERS.find((u) => u.username === req.user.username);
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.status(403).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on Port:${port}`);
});
