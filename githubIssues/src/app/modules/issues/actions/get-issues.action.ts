import { sleep } from "@helpers/index"
import { GitHubIssue, State } from "../interfaces"
import { environment } from "src/environments/environment.development"

const BASE_URL = environment.baseUrl
const GITHUB_TOKEN = environment.gitHubToken

export const getIssues = async(state:State = State.All) => {
    await sleep(1500)

    const params = new URLSearchParams();
    params.append("state", state);

    try{

        const resp = await fetch(`${BASE_URL}/issues?${params}`, {
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
