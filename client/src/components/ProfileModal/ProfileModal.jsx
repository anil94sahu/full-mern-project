import { Modal, useMantineTheme } from '@mantine/core';
import { useEffect } from 'react';

function ProfileModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();
  return (
      <Modal
        title=""
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        
      >
        <form className="infoform">
            <h3>Your info</h3>
            <div>
                <input className="infoInput" type="text" name="firstname" placeholder="First Name"/>
                <input className="infoInput" type="text" name="lastname" placeholder="Last Name"/>
            </div>
            <div>
                <input className="infoInput" type="text" name="worksAt" placeholder="Works At"/>
            </div>
            <div>
                <input className="infoInput" type="text" name="livesin" placeholder="Lives In"/>
                <input className="infoInput" type="text" name="country" placeholder="Country"/>
            </div>
            <div>
                <input className="infoInput" type="text" name="relationshipStatus" placeholder="Relationship Status"/>
            </div>
            <div>
                Profile Image
                <input type="file" name="profileImage" id="" />
                Cover Image
                <input type="file" name="coverImage" id="" />
            </div>
            <button className="button infoButton">Update</button>
        </form>
      </Modal>

  );
}
export default ProfileModal;