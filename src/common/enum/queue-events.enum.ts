export enum EventsEnum {
  // === Generic status events ===
  ERROR = 'error', // Server -> Client: operation failed
  SUCCESS = 'success', // Server -> Client: operation succeeded

  // === Messaging ===
  MESSAGE_SEND = 'private:message_send', // Client -> Server: send a new message
  MESSAGE_ACK = 'private:message_ack', // Server -> Client: ack message persisted (idempotency)
  MESSAGE_NEW = 'private:message_new', // Server -> other participant: new message delivered
  MESSAGE_STATUS_UPDATE = 'private:message_status_update', // Server -> Client: delivered/read updates
  MESSAGE_MARK_READ = 'private:message_mark_read', // Client -> Server: mark messages as read
  MESSAGE_EDIT = 'private:message_edit', // Client -> Server: edit a message
  MESSAGE_DELETE = 'private:message_delete', // Client -> Server: delete a message
  REACTION_ADD = 'private:reaction_add', // Client -> Server: add reaction
  REACTION_REMOVE = 'private:reaction_remove', // Client -> Server: remove reaction
  FILE_UPLOAD_PROGRESS = 'private:file_upload_progress', // Client/Server: file upload progress updates

  // === Typing & Presence ===
  TYPING_START = 'private:typing_start',
  TYPING_STOP = 'private:typing_stop',
  PRESENCE_UPDATE = 'private:presence_update', // Server -> Others: online/offline/idle

  // === Conversation ===
  CONVERSATION_LOAD_LIST = 'private:conversation_load_list', // Client -> Server
  CONVERSATION_LIST_RESPONSE = 'private:conversation_list_response', // Server -> Client (paginated)
  CONVERSATION_LOAD = 'private:conversation_load', // Client -> Server (single)
  CONVERSATION_RESPONSE = 'private:conversation_response', // Server -> Client (single)
  CONVERSATION_INITIATE = 'private:conversation_initiate', // Client -> Server: create or get existing conversation
  CONVERSATION_UPDATE = 'private:conversation_update', // Server -> Client: title/status change
  CONVERSATION_DELETE = 'private:conversation_delete', // Client -> Server: request delete/archive

  // === Calls lifecycle ===
  CALL_INITIATE = 'private:call_initiate', // Client -> Server
  CALL_INCOMING = 'private:call_incoming', // Server -> other participant
  CALL_ACCEPT = 'private:call_accept', // Client -> Server
  CALL_REJECT = 'private:call_reject', // Client -> Server
  CALL_JOIN = 'private:call_join', // Client -> Server
  CALL_LEAVE = 'private:call_leave', // Client -> Server
  CALL_END = 'private:call_end', // Server -> other participant(s)
  CALL_MISSED = 'private:call_missed', // Server -> other participant

  // === WebRTC signaling (separate namespace 'rtc') ===
  // Client -> Server (requests)
  RTC_OFFER_SEND = 'rtc:offer_send',
  RTC_ANSWER_SEND = 'rtc:answer_send',
  RTC_ICE_CANDIDATE_SEND = 'rtc:ice_candidate_send',

  // Server -> Client (forwarded to peer)
  RTC_OFFER = 'rtc:offer',
  RTC_ANSWER = 'rtc:answer',
  RTC_ICE_CANDIDATE = 'rtc:ice_candidate',

  // === Optional diagnostics ===
  PING = 'private:ping',
  PONG = 'private:pong',
}

export enum QueueEventsEnum {
  // === Notification events ===
  NOTIFICATION = 'queue:notification',
  MESSAGES = 'queue:messages',
  GENERIC = 'queue:generic',
}
