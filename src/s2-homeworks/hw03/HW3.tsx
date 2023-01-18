import React, {Dispatch, useState} from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип UserType - is done
* 2 - указать нужный тип в useState с users - is done
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами - is done
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов - is done
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error - is done
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback - is done
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами - is done
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) - is done
* 9 - в файле Greeting.tsx дописать типизацию пропсов - is done
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки - is done
* 11 - сделать стили в соответствии с дизайном - is done
* */

// types
export type UserType = {
    _id: number // need to fix any
    name: string // need to fix any
}

export const pureAddUserCallback = (name: string, setUsers: Dispatch<Array<UserType>>, users: Array<UserType>) => { // need to fix any
    const user = {
        _id: Date.now(),
        name: name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
