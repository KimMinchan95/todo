import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

const CustomHeader = styled(ModalHeader)`
    font-weight: bold;
`;

const CustomModalSize = styled(Modal)`
    width: 450px;
`;

const CustomModal = ({
    initModal = false,
    toggleModal = function () {
        initModal = !initModal;
    },
    title,
    body,
    removeOk,
    removeCancel,
}) => {
    return (
        <CustomModalSize isOpen={initModal} toggle={toggleModal}>
            <CustomHeader>{title}</CustomHeader>
            <ModalBody>{body}</ModalBody>
            <ModalFooter>
                {!removeOk && (
                    <Button color="primary" onClick={toggleModal}>
                        확인
                    </Button>
                )}
                {!removeCancel && (
                    <Button color="danger" onClick={toggleModal}>
                        취소
                    </Button>
                )}
            </ModalFooter>
        </CustomModalSize>
    );
};

export default CustomModal;
