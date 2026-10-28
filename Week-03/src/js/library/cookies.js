export default {
    get(name){
        const match = document.cookie
            .split("; ")
            .find(row => row.startsWith(`${name}=`));


        // "count=1" => split => ["count", "1"] => grab via array methods => "1"
        return match ? decodeURIComponent(match.split("=")[1]) : null;

    },

    set(name, value, maxAgeSeconds){
        document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAgeSeconds}; path=/; SameSite=Lax`;
    },

    remove(name){
        document.cookie = `${name}=; max-age=0; path=/`;
    }
}