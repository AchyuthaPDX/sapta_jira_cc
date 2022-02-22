//connector logic  to JIRA API

const express = require("express");
const app = express();
const cors = require("cors")
var JiraClient = require("jira-connector");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

var jira = new JiraClient({
    host: "test1234566.atlassian.net",
    basic_auth: {
        email: "codepythongo@gmail.com",
        api_token: "apitoken",
    },
});

app.post("/", (req, res) => {
    res.send("starts new nodejs project");

    if (req.body.status == "success") {
        jira.issue.createIssue({
            fields: {
                project: {
                    key: "SI",
                },
                summary: "Testing JIRA rest api",
                description: " this issue is create from JIRA rest api connector",
                issuetype: {
                    name: "story",
                },
            },
            function(error, issue) {
                console.log("error", error);
                console.log("issue", issue);

            }
        });
    } else {
        console.log("status: not success")
    }

});


app.listen(5000, () => console.log("listing on port 5000"));
