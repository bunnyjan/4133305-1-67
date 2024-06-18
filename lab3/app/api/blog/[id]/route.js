export function GET(request,{params}){
    return Response.json({
        name: "Jiraporn",
        major: "IT",
        lv: "3",
        id: params.id
    });
}