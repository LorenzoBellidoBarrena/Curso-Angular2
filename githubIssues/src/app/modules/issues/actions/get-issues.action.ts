import { sleep } from "@helpers/index"
import { GitHubIssue } from "../interfaces"
import { environment } from "src/environments/environment.development"

const BASE_URL = environment.baseUrl
const GITHUB_TOKEN = environment.gitHubToken

export const getIssues = async() => {
    await sleep(1500)
    try{

        const resp = await fetch(`${BASE_URL}/issues`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`
          }
        })

        if(!resp.ok) throw "Can't load issues"

        const issues = await resp.json() as GitHubIssue[]
        console.log(issues)

        return issues

    }catch(e){
        throw "Cant't load issues"
    }
}
