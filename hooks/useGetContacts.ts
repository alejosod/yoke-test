import {useEffect, useState} from "react";
import {BASE_URL, Contact} from "@/constants";
import axios from "axios";

export const useGetContacts = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(BASE_URL)

                setContacts(data.contacts)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return {contacts}
}
