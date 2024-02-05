import { ref, onMounted } from 'vue';

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const load = ref(true);

    const getUsers = async () => {
        try {
            const req = await fetch(url);
            const json = await req.json();
            data.value = json.data;
        } catch (err) {
            error.value = "Erro a fazer a requisão"
        }
        load.value = false;
    }

    onMounted(async () => {
        await getUsers();
    });

    return {
        data,
        load,
        error
    };

}