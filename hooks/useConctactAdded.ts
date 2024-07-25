import {useState} from "react";
import {Contact} from "@/constants";

export const useConctactAdded = () => {
    const [addedContacts, setAddedContacts] = useState<Contact[]>([])

    const addContact = (contact: Contact): void => {
        setAddedContacts(prev => {
            return [...prev, contact]
        })
    }

    const removeContact = (id: string) => {
        const index = addedContacts.findIndex(({id: contactId}) => contactId === id)

        setAddedContacts(prev => [...prev.slice(0, index), ...prev.slice(index + 1)])
    }

    return {
        addedContacts,
        addContact,
        removeContact,
    }
}
