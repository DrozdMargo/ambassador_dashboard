import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import axios from "axios";

const Layout = (props: any) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await axios.get('user', {withCredentials: true});

                } catch(e) {

                }
            }
        )();
    }, []);

    return (
        <div>
            <Nav />

            <div className="container-fluid">
                <div className="row">
                    <Menu />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="table-responsive">
                            {props.children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Layout;
