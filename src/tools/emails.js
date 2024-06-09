import axios from "axios";

export default function send_mail(subject,body) {
    axios({
        method: 'POST',
        url: 'https://portfoliobackend-ecru.vercel.app/mail/',
        data: {subject,body}
    })
}