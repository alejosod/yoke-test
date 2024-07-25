import {ScrollView, Text, TextInput, TextInputChangeEventData, View} from "react-native";
import {ContactRow} from "@/components/ContactRow";
import {useGetContacts} from "@/hooks/useGetContacts";
import {useConctactAdded} from "@/hooks/useConctactAdded";
import {Avatar} from "@/components/Avatar";
import {AddedContact} from "@/components/AddedContact";
import {useState} from "react";
import * as sea from "node:sea";

const App = () => {
    const [searchValue, setSearchValue] = useState('')
    const {contacts = []} = useGetContacts()
    const { addContact, addedContacts, removeContact} = useConctactAdded()

    return (
        <View>
            <TextInput style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
            }} onChangeText={setSearchValue} value={searchValue} />

            <ScrollView horizontal style={{height: 80}} contentContainerStyle={{ alignItems: 'center'}}>
                <View>
                    <Text>{addedContacts.length}</Text>
                </View>
                {addedContacts.map((Contact) => {
                    return <AddedContact onPress={() => removeContact(Contact.id)} />
                })}
            </ScrollView>
            {contacts.filter(({firstName,lastName }) => {
                console.log({firstName});
                if(firstName && lastName){
                    return searchValue ? firstName.includes(searchValue) || lastName.includes(searchValue) : true
                }


            }).map((contact) => (
                <ContactRow checked={addedContacts.find(({id}) => id === contact.id) } onPress={() => addContact(contact)} contactName={contact.firstName + ' ' +contact.lastName} number={contact.number}/>
            ))}
        </View>
    )
}

export  default App

