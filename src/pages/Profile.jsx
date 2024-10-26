import  { useContext, useState } from 'react';
import { UserContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Profile = () => {
    const { loginUserInfo } = useContext(UserContext);
    const [displayName, setDisplayName] = useState(loginUserInfo?.displayName || '');
    const [photoFile, setPhotoFile] = useState(null);
    const [photoURL, setPhotoURL] = useState(loginUserInfo?.photoURL || '');
    const [message, setMessage] = useState('');

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        if (loginUserInfo) {
            try {
                await updateProfile(loginUserInfo, { displayName, photoURL });
                setMessage('Profile updated successfully!');


                if (photoFile) {
                    const storage = getStorage();
                    const storageRef = ref(storage, `profile_photos/${loginUserInfo.uid}`);


                    await uploadBytes(storageRef, photoFile);


                    const url = await getDownloadURL(storageRef);
                    await updateProfile(loginUserInfo, { photoURL: url });


                    setPhotoURL(url);
                }
            } catch (error) {
                setMessage('Error updating profile: ' + error.message);
            }
        }
    };

    const handleFileChange = (e) => {
        setPhotoFile(e.target.files[0]);
    };

    return (
        <div className="profile-container p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold">Profile Information</h2>
            
            <form onSubmit={handleSaveChanges} className="space-y-4">
                <div className="flex flex-col">
                    <label className="font-medium">Name</label>
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="p-2 border rounded"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-medium">Email</label>
                    <input
                        type="email"
                        value={loginUserInfo?.email || ''}
                        disabled
                        className="p-2 border rounded bg-gray-200"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-medium">Upload Photo</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="p-2 border rounded"
                    />
                </div>


                {photoURL && (
                    <div className="mt-4">
                        <img 
                            src={photoURL} 
                            alt="Profile" 
                            className="w-24 h-24 rounded-full border border-gray-300 mx-auto"
                        />
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded"
                >
                    Save Changes
                </button>
                
                {message && <p className="text-green-600 mt-4">{message}</p>}
            </form>
        </div>
    );
};

export default Profile;
