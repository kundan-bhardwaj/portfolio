import axios from "axios";

export default function send_mail(subject,body) {
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/mail/',
        data: {subject,body}
    })
}