(function() {var implementors = {};
implementors["harmony_rust_sdk"] = [{"text":"impl Clone for GetUserRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetUserResponse","synthetic":false,"types":[]},{"text":"impl Clone for GetUserMetadataRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetUserMetadataResponse","synthetic":false,"types":[]},{"text":"impl Clone for ProfileUpdateRequest","synthetic":false,"types":[]},{"text":"impl Clone for CreateGuildRequest","synthetic":false,"types":[]},{"text":"impl Clone for CreateGuildResponse","synthetic":false,"types":[]},{"text":"impl Clone for CreateInviteRequest","synthetic":false,"types":[]},{"text":"impl Clone for CreateInviteResponse","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildListRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildListResponse","synthetic":false,"types":[]},{"text":"impl Clone for GuildListEntry","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildResponse","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildInvitesRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildInvitesResponse","synthetic":false,"types":[]},{"text":"impl Clone for Invite","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildMembersRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildMembersResponse","synthetic":false,"types":[]},{"text":"impl Clone for UpdateGuildInformationRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeleteGuildRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeleteInviteRequest","synthetic":false,"types":[]},{"text":"impl Clone for JoinGuildRequest","synthetic":false,"types":[]},{"text":"impl Clone for JoinGuildResponse","synthetic":false,"types":[]},{"text":"impl Clone for PreviewGuildRequest","synthetic":false,"types":[]},{"text":"impl Clone for PreviewGuildResponse","synthetic":false,"types":[]},{"text":"impl Clone for LeaveGuildRequest","synthetic":false,"types":[]},{"text":"impl Clone for AddGuildToGuildListRequest","synthetic":false,"types":[]},{"text":"impl Clone for AddGuildToGuildListResponse","synthetic":false,"types":[]},{"text":"impl Clone for RemoveGuildFromGuildListRequest","synthetic":false,"types":[]},{"text":"impl Clone for RemoveGuildFromGuildListResponse","synthetic":false,"types":[]},{"text":"impl Clone for CreateChannelRequest","synthetic":false,"types":[]},{"text":"impl Clone for CreateChannelResponse","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildChannelsRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildChannelsResponse","synthetic":false,"types":[]},{"text":"impl Clone for Channel","synthetic":false,"types":[]},{"text":"impl Clone for UpdateChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl Clone for UpdateChannelOrderRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeleteChannelRequest","synthetic":false,"types":[]},{"text":"impl Clone for TypingRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetChannelMessagesRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetChannelMessagesResponse","synthetic":false,"types":[]},{"text":"impl Clone for GetMessageRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetMessageResponse","synthetic":false,"types":[]},{"text":"impl Clone for UpdateMessageRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeleteMessageRequest","synthetic":false,"types":[]},{"text":"impl Clone for TriggerActionRequest","synthetic":false,"types":[]},{"text":"impl Clone for SendMessageRequest","synthetic":false,"types":[]},{"text":"impl Clone for SendMessageResponse","synthetic":false,"types":[]},{"text":"impl Clone for CreateEmotePackRequest","synthetic":false,"types":[]},{"text":"impl Clone for CreateEmotePackResponse","synthetic":false,"types":[]},{"text":"impl Clone for GetEmotePacksRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetEmotePacksResponse","synthetic":false,"types":[]},{"text":"impl Clone for EmotePack","synthetic":false,"types":[]},{"text":"impl Clone for GetEmotePackEmotesRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetEmotePackEmotesResponse","synthetic":false,"types":[]},{"text":"impl Clone for Emote","synthetic":false,"types":[]},{"text":"impl Clone for AddEmoteToPackRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeleteEmoteFromPackRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeleteEmotePackRequest","synthetic":false,"types":[]},{"text":"impl Clone for DequipEmotePackRequest","synthetic":false,"types":[]},{"text":"impl Clone for QueryPermissionsRequest","synthetic":false,"types":[]},{"text":"impl Clone for QueryPermissionsResponse","synthetic":false,"types":[]},{"text":"impl Clone for Permission","synthetic":false,"types":[]},{"text":"impl Clone for Mode","synthetic":false,"types":[]},{"text":"impl Clone for PermissionList","synthetic":false,"types":[]},{"text":"impl Clone for SetPermissionsRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetPermissionsRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetPermissionsResponse","synthetic":false,"types":[]},{"text":"impl Clone for Role","synthetic":false,"types":[]},{"text":"impl Clone for MoveRoleRequest","synthetic":false,"types":[]},{"text":"impl Clone for MoveRoleResponse","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildRolesRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetGuildRolesResponse","synthetic":false,"types":[]},{"text":"impl Clone for AddGuildRoleRequest","synthetic":false,"types":[]},{"text":"impl Clone for AddGuildRoleResponse","synthetic":false,"types":[]},{"text":"impl Clone for DeleteGuildRoleRequest","synthetic":false,"types":[]},{"text":"impl Clone for ModifyGuildRoleRequest","synthetic":false,"types":[]},{"text":"impl Clone for ManageUserRolesRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetUserRolesRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetUserRolesResponse","synthetic":false,"types":[]},{"text":"impl Clone for StreamEventsRequest","synthetic":false,"types":[]},{"text":"impl Clone for SubscribeToGuild","synthetic":false,"types":[]},{"text":"impl Clone for SubscribeToActions","synthetic":false,"types":[]},{"text":"impl Clone for SubscribeToHomeserverEvents","synthetic":false,"types":[]},{"text":"impl Clone for Request","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for MessageSent","synthetic":false,"types":[]},{"text":"impl Clone for MessageUpdated","synthetic":false,"types":[]},{"text":"impl Clone for MessageDeleted","synthetic":false,"types":[]},{"text":"impl Clone for ChannelCreated","synthetic":false,"types":[]},{"text":"impl Clone for ChannelUpdated","synthetic":false,"types":[]},{"text":"impl Clone for ChannelDeleted","synthetic":false,"types":[]},{"text":"impl Clone for GuildUpdated","synthetic":false,"types":[]},{"text":"impl Clone for GuildDeleted","synthetic":false,"types":[]},{"text":"impl Clone for MemberJoined","synthetic":false,"types":[]},{"text":"impl Clone for MemberLeft","synthetic":false,"types":[]},{"text":"impl Clone for GuildAddedToList","synthetic":false,"types":[]},{"text":"impl Clone for GuildRemovedFromList","synthetic":false,"types":[]},{"text":"impl Clone for ActionPerformed","synthetic":false,"types":[]},{"text":"impl Clone for RoleMoved","synthetic":false,"types":[]},{"text":"impl Clone for ProfileUpdated","synthetic":false,"types":[]},{"text":"impl Clone for Typing","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for SyncRequest","synthetic":false,"types":[]},{"text":"impl Clone for SyncEvent","synthetic":false,"types":[]},{"text":"impl Clone for DmInvite","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for ChatServiceClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;ChatService&gt; Clone for ChatServiceServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Place","synthetic":false,"types":[]},{"text":"impl Clone for InviteId","synthetic":false,"types":[]},{"text":"impl Clone for BeginAuthResponse","synthetic":false,"types":[]},{"text":"impl Clone for Session","synthetic":false,"types":[]},{"text":"impl Clone for AuthStep","synthetic":false,"types":[]},{"text":"impl Clone for Choice","synthetic":false,"types":[]},{"text":"impl Clone for Form","synthetic":false,"types":[]},{"text":"impl Clone for FormField","synthetic":false,"types":[]},{"text":"impl Clone for Waiting","synthetic":false,"types":[]},{"text":"impl Clone for Step","synthetic":false,"types":[]},{"text":"impl Clone for NextStepRequest","synthetic":false,"types":[]},{"text":"impl Clone for Choice","synthetic":false,"types":[]},{"text":"impl Clone for FormFields","synthetic":false,"types":[]},{"text":"impl Clone for Field","synthetic":false,"types":[]},{"text":"impl Clone for Form","synthetic":false,"types":[]},{"text":"impl Clone for Step","synthetic":false,"types":[]},{"text":"impl Clone for StepBackRequest","synthetic":false,"types":[]},{"text":"impl Clone for StreamStepsRequest","synthetic":false,"types":[]},{"text":"impl Clone for FederateRequest","synthetic":false,"types":[]},{"text":"impl Clone for FederateReply","synthetic":false,"types":[]},{"text":"impl Clone for KeyReply","synthetic":false,"types":[]},{"text":"impl Clone for LoginFederatedRequest","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for AuthServiceClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AuthService&gt; Clone for AuthServiceServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for HarmonyMethodMetadata","synthetic":false,"types":[]},{"text":"impl Clone for Override","synthetic":false,"types":[]},{"text":"impl Clone for Reason","synthetic":false,"types":[]},{"text":"impl Clone for Action","synthetic":false,"types":[]},{"text":"impl Clone for EmbedHeading","synthetic":false,"types":[]},{"text":"impl Clone for EmbedField","synthetic":false,"types":[]},{"text":"impl Clone for Embed","synthetic":false,"types":[]},{"text":"impl Clone for Attachment","synthetic":false,"types":[]},{"text":"impl Clone for Metadata","synthetic":false,"types":[]},{"text":"impl Clone for Message","synthetic":false,"types":[]},{"text":"impl Clone for UserStatus","synthetic":false,"types":[]},{"text":"impl Clone for ActionType","synthetic":false,"types":[]},{"text":"impl Clone for ActionPresentation","synthetic":false,"types":[]},{"text":"impl Clone for FieldPresentation","synthetic":false,"types":[]},{"text":"impl Clone for SiteMetadata","synthetic":false,"types":[]},{"text":"impl Clone for FetchLinkMetadataRequest","synthetic":false,"types":[]},{"text":"impl Clone for InstantViewRequest","synthetic":false,"types":[]},{"text":"impl Clone for InstantViewResponse","synthetic":false,"types":[]},{"text":"impl Clone for CanInstantViewResponse","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for MediaProxyServiceClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;MediaProxyService&gt; Clone for MediaProxyServiceServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ClientSignal","synthetic":false,"types":[]},{"text":"impl Clone for Answer","synthetic":false,"types":[]},{"text":"impl Clone for Candidate","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for Signal","synthetic":false,"types":[]},{"text":"impl Clone for IceCandidate","synthetic":false,"types":[]},{"text":"impl Clone for Offer","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for VoiceServiceClient&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;VoiceService&gt; Clone for VoiceServiceServer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Hmc","synthetic":false,"types":[]},{"text":"impl Clone for Hmcs","synthetic":false,"types":[]},{"text":"impl Clone for AuthStepResponse","synthetic":false,"types":[]},{"text":"impl Clone for AuthResponse","synthetic":false,"types":[]},{"text":"impl Clone for AuthId","synthetic":false,"types":[]},{"text":"impl Clone for EventSource","synthetic":false,"types":[]},{"text":"impl Clone for MessageLocation","synthetic":false,"types":[]},{"text":"impl Clone for GuildId","synthetic":false,"types":[]},{"text":"impl Clone for UserId","synthetic":false,"types":[]},{"text":"impl Clone for GetChannelMessages","synthetic":false,"types":[]},{"text":"impl Clone for CreateChannel","synthetic":false,"types":[]},{"text":"impl Clone for DeleteChannel","synthetic":false,"types":[]},{"text":"impl Clone for UpdateChannelInformation","synthetic":false,"types":[]},{"text":"impl Clone for UpdateChannelOrder","synthetic":false,"types":[]},{"text":"impl Clone for PackId","synthetic":false,"types":[]},{"text":"impl Clone for CreateEmotePack","synthetic":false,"types":[]},{"text":"impl Clone for AddEmoteToPack","synthetic":false,"types":[]},{"text":"impl Clone for DeleteEmoteFromPack","synthetic":false,"types":[]},{"text":"impl Clone for CreateGuild","synthetic":false,"types":[]},{"text":"impl Clone for GuildList","synthetic":false,"types":[]},{"text":"impl Clone for UpdateGuildInformation","synthetic":false,"types":[]},{"text":"impl Clone for CreateInvite","synthetic":false,"types":[]},{"text":"impl Clone for DeleteInvite","synthetic":false,"types":[]},{"text":"impl Clone for SendMessage","synthetic":false,"types":[]},{"text":"impl Clone for UpdateMessage","synthetic":false,"types":[]},{"text":"impl Clone for GetPermissions","synthetic":false,"types":[]},{"text":"impl Clone for QueryPermissions","synthetic":false,"types":[]},{"text":"impl Clone for SetPermissions","synthetic":false,"types":[]},{"text":"impl Clone for AddGuildRole","synthetic":false,"types":[]},{"text":"impl Clone for DeleteGuildRole","synthetic":false,"types":[]},{"text":"impl Clone for ModifyGuildRole","synthetic":false,"types":[]},{"text":"impl Clone for MoveRole","synthetic":false,"types":[]},{"text":"impl Clone for ManageUserRoles","synthetic":false,"types":[]},{"text":"impl Clone for GetUserRoles","synthetic":false,"types":[]},{"text":"impl Clone for AppId","synthetic":false,"types":[]},{"text":"impl Clone for ProfileUpdate","synthetic":false,"types":[]},{"text":"impl Clone for TriggerAction","synthetic":false,"types":[]},{"text":"impl Clone for Typing","synthetic":false,"types":[]},{"text":"impl Clone for FileId","synthetic":false,"types":[]},{"text":"impl Clone for FileKind","synthetic":false,"types":[]},{"text":"impl Clone for DownloadedFile","synthetic":false,"types":[]},{"text":"impl Clone for AuthStatus","synthetic":false,"types":[]},{"text":"impl Clone for Client","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()