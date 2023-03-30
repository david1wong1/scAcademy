import { LightningElement, api, wire } from 'lwc';
import LightningModal from 'lightning/modal';
import { refreshApex } from '@salesforce/apex';
import { publish,subscribe,unsubscribe, MessageContext,releaseMessageContext } from 'lightning/messageService';
import refreshChannel from '@salesforce/messageChannel/refreshChannel__c';

export default class AnimeSearchModal extends LightningModal {
    @api content;
    channel = refreshChannel;

    @wire(MessageContext)
    messageContext;

    handleCloseModal() {
        this.close('Done');
        console.log('Modal closed');
        const message = {
            data: 'refresh'
        };
        publish(this.messageContext, this.channel, message);
    }
    

}