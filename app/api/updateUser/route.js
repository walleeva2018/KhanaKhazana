
import User from "@/app/models/User";
import connectMongo from "@/dbConnect/connectMongo";




export async function POST(req) {
    try {
        await connectMongo()

        console.log('gota')

        const { email, updatedInfo } = await req.json();
        

        if (!email || !updatedInfo) {
            return new Response(JSON.stringify({ error: "Invalid data" }), { status: 400 });
        }

        const updatedUser = await User.findOneAndUpdate({ email }, updatedInfo, { new: true });
        console.log('tew',updatedUser)

        if (!updatedUser) {
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(updatedUser), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}