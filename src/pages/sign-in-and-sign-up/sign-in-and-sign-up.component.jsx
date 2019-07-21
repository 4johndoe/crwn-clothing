import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import SignIn from "../../components/sign-in";
import SingUp from '../../components/sign-up';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SingUp />
    </div>
);

export default SignInAndSignUpPage;