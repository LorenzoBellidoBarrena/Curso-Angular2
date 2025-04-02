import { environment } from "src/environments/environment.development"
import { getIssueByNumber } from "./get-issue-by-number.action"

const BASE_URL = environment.baseUrl
const GITHUB_TOKEN = environment.gitHubToken
const issueNumber = '123'

const mockIssue = {
  id:123,
  number: issueNumber,
  body: '#Hola Mundo'
}

describe('GetIssueByNumber', () => {
    it('should fetch issue successfully', async () => {
      const requestURL = `${BASE_URL}/issues/${issueNumber}`
      const issueResponse = new Response(JSON.stringify({mockIssue}), { status: 200, statusText: 'OK' })

      spyOn(window, 'fetch').and.resolveTo(issueResponse);

      const issue = await getIssueByNumber(issueNumber);

      expect(window.fetch).toHaveBeenCalledWith(requestURL, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`
        }
      });
    });

    it('should not fetch issue successfully', async () => {
      const requestURL = `${BASE_URL}/issues/${issueNumber}`
      const issueResponse = new Response(null, { status: 404, statusText: 'Not Found' })

      spyOn(window, 'fetch').and.resolveTo(issueResponse);

      try{
        const issue = await getIssueByNumber(issueNumber);
        expect(true).toBe(false) // nunca se ejecuta porque falla y entra en el catch

      }catch(e){
        expect(e).toBe(`Cant't load issue: ${issueNumber}`)
      }

      // expect(window.fetch).toHaveBeenCalledWith(requestURL, {
      //   headers: {
      //     Authorization: `Bearer ${GITHUB_TOKEN}`
      //   }
      // });
    });
})
