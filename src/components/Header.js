import React from 'react';

const Header = () => {
    return (
        <>
            <header className="header container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="header-title font-inter-bold text-white">Altent - Nima qiladi</h1>
                        
                        <p className="header-description font-raleway-medium">
                            IELTS imtihonidan 8 balldan yuqori olmoqchi bo’lsangiz unda siz ko’rsatkchi 8 dan yuqori bo’lgan tajribali o’qituvchilardan ta’lim oling biz sizga shunday imkoniyatni beramiz. Qolgan malumotlarni
                            video orqali koringiz mumkin.
                        </p>

                        <button type="button" className="btn btn-warning">
                            <a href="tel:+998331011501" className="text-decoration-none text-white">Hoziroq bog'lanish</a>
                        </button>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-none d-md-block">
                        <img src="/images/video.png" className="header-video" alt="Error"/>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;