import React from 'react';

export default function IconBoxStyle14({ department_id, doctor_id, id, status, test, user_id, }) {
    return (
        <div className="cs_iconbox cs_style_13 text-center cs_radius_25">
            <div className="cs_iconbox_icon">
                <div className="cs_iconbox_icon_in cs_accent_bg cs_center">
                    {/* <img src={iconUrl} alt="Icon" /> */}
                </div>
            </div>
            <div className="cs_iconbox_info">

                <h2 className="cs_iconbox_title cs_fs_40">{department_id}</h2>
                <p className="cs_iconbox_subtitle mb-0">{doctor_id}</p>

                <p className="cs_iconbox_subtitle mb-0">{id}</p>
                <p className="cs_iconbox_subtitle mb-0">{user_id}</p>
                <p className="cs_iconbox_subtitle mb-0">{test}</p>
                <p className="cs_iconbox_subtitle mb-0">{status}</p>

            </div>
        </div>
    );
}

