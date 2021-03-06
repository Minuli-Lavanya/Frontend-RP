import axios from "axios";

const SESSION_API_BASE_URL = "http://localhost:8070/sessions";

class SessionService {
  getSessions() {
    return axios.get(SESSION_API_BASE_URL);
  }

  addSession(Session) {
    return axios.post(SESSION_API_BASE_URL, Session);
  }

  retrieveSession(id) {
    return axios.get(`http://localhost:8070/sessions/${id}`);
  }

  updateSession(Session) {
    return axios.put("http://localhost:8070/sessions", Session);
  }

  deleteSession(id) {
    return axios.delete(`http://localhost:8070/sessions/${id}`);
  }

  searchSession(searchText){
    return axios.get(`http://localhost:8070/sessions/search/${searchText}`);
  }

  downloadSessionReport(searchText){
    return axios.get(`http://localhost:8070/report/${searchText}`);
}
}

export default new SessionService();
