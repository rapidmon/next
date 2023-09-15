export default async function handler(req, res) {
    const time = new Date();
    if(req.method == 'POST'){

    } else if(req.method == 'GET'){
        return res.status(200).json(time);
    }
}