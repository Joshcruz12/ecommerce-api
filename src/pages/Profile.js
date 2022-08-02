import React from 'react'

export const Profile = () => {

    return (
        <>
            <div className="page-wrapper">
                <div className="page-title-overlap bg-dark pt-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                                    <li className="breadcrumb-item text-nowrap"><a href="/#">Account</a>
                                    </li>
                                    <li className="breadcrumb-item text-nowrap active" aria-current="page">Profile info</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 text-light mb-0">Profile info</h1>
                        </div>
                    </div>
                </div>
                <div className="container pb-5 mb-2 mb-md-4">
                    <div className="row">
                        <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
                            <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
                                <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                                    <div className="d-md-flex align-items-center">
                                        <div className="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0" width="6.375rem"><span className="badge bg-warning position-absolute end-0 mt-n2" data-bs-toggle="tooltip" title="Reward points">384</span><img className="rounded-circle" src="img/shop/account/avatar.jpg" alt="Susan Gardner"/></div>
                                        <div className="ps-md-3">
                                            <h3 className="fs-base mb-0">Susan Gardner</h3><span className="text-accent fs-sm">s.gardner@example.com</span>
                                        </div>
                                    </div><a className="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0" href="#account-menu" data-bs-toggle="collapse" aria-expanded="false"><i className="ci-menu me-2"></i>Account menu</a>
                                </div>
                                <div className="d-lg-block collapse" id="account-menu">
                                    <div className="bg-secondary px-4 py-3">
                                        <h3 className="fs-sm mb-0 text-muted">Dashboard</h3>
                                    </div>
                                    <ul className="list-unstyled mb-0">
                                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-orders.html"><i className="ci-bag opacity-60 me-2"></i>Orders<span className="fs-sm text-muted ms-auto">1</span></a></li>
                                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-wishlist.html"><i className="ci-heart opacity-60 me-2"></i>Wishlist<span className="fs-sm text-muted ms-auto">3</span></a></li>
                                        <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-tickets.html"><i className="ci-help opacity-60 me-2"></i>Support tickets<span className="fs-sm text-muted ms-auto">1</span></a></li>
                                    </ul>
                                    <div className="bg-secondary px-4 py-3">
                                        <h3 className="fs-sm mb-0 text-muted">Account settings</h3>
                                    </div>
                                    <ul className="list-unstyled mb-0">
                                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3 active" href="account-profile.html"><i className="ci-user opacity-60 me-2"></i>Profile info</a></li>
                                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-address.html"><i className="ci-location opacity-60 me-2"></i>Addresses</a></li>
                                        <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-payment.html"><i className="ci-card opacity-60 me-2"></i>Payment methods</a></li>
                                        <li className="d-lg-none border-top mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-signin.html"><i className="ci-sign-out opacity-60 me-2"></i>Sign out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        <section className="col-lg-8">
                            <div className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
                                <h6 className="fs-base text-light mb-0">Update you profile details below:</h6><a className="btn btn-primary btn-sm" href="account-signin.html"><i className="ci-sign-out me-2"></i>Sign out</a>
                            </div>
                            <form>
                                <div className="bg-secondary rounded-3 p-4 mb-4">
                                    <div className="d-flex align-items-center"><img className="rounded" src="img/shop/account/avatar.jpg" width="90" alt="Susan Gardner"/>
                                        <div className="ps-3">
                                            <button className="btn btn-light btn-shadow btn-sm mb-2" type="button"><i className="ci-loading me-2"></i>Change avatar</button>
                                            <div className="p mb-0 fs-ms text-muted">Upload JPG, GIF or PNG image. 300 x 300 required.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-4 gy-3">
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="account-fn">First Name</label>
                                        <input className="form-control" type="text" id="account-fn" defaultValue="Susan" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="account-ln">Last Name</label>
                                        <input className="form-control" type="text" id="account-ln" defaultValue="Gardner" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="account-email">Email Address</label>
                                        <input className="form-control" type="email" id="account-email" defaultValue="s.gardner@example.com" disabled />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="account-phone">Phone Number</label>
                                        <input className="form-control" type="text" id="account-phone" defaultValue="+7 (805) 348 95 72" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="account-pass">New Password</label>
                                        <div className="password-toggle">
                                            <input className="form-control" type="password" id="account-pass" />
                                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" htmlFor="account-confirm-pass">Confirm Password</label>
                                        <div className="password-toggle">
                                            <input className="form-control" type="password" id="account-confirm-pass" />
                                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <hr className="mt-2 mb-3" />
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="subscribe_me" defaultChecked />
                                                <label className="form-check-label" htmlFor="subscribe_me">Subscribe me to Newsletter</label>
                                            </div>
                                            <button className="btn btn-primary mt-3 mt-sm-0" type="button">Update profile</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
