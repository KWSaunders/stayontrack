import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://100.20.33.186:8080/api/session/';
// const API_URL = 'http://localhost:8080/api/session/';

class SessionService {

    // Add a set to a current workout
    //TODO: add headers to axios post
    addSet(exercise, weight, reps) {
        return axios.post(API_URL + "add", {
            exercise,
            weight,
            reps
        }, { headers: authHeader() });
    }

    getSets() {
        return axios.get(API_URL + "sets", { headers: authHeader() });
    }

    getWorkouts() {
        return axios.get(API_URL + "workouts", { headers: authHeader() });
    }

    complete(name) {
        return axios.post(API_URL + "complete", { name }, { headers: authHeader() });
    }

    getWorkoutId() {
        return axios.get(API_URL + "workoutId", { headers: authHeader() });
    }
}

export default new SessionService();
