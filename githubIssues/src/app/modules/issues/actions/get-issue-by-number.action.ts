import { sleep } from "@helpers/index"
import { GitHubIssue } from "../interfaces"
import { environment } from "src/environments/environment.development"

const BASE_URL = environment.baseUrl
const GITHUB_TOKEN = environment.gitHubToken

export const getIssueByNumber = async(issueNumber:string) => {
    try{

        const resp = await fetch(`${BASE_URL}/issues/${issueNumber}`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`
          }
        })

        if(!resp.ok) throw "Can't load issue"

        const issue = await resp.json() as GitHubIssue
        console.log(issue)

        return issue

    }catch(e){
        throw `Cant't load issue: ${issueNumber}`
    }
}
