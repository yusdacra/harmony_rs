use crate::{
    api::core::*,
    client::{Client, ClientResult},
    client_api,
};
use futures_util::StreamExt;
use http::Uri;
use tonic::{Request, Response};

// Export everything a client may need for this service
pub use crate::api::core::{
    event, get_emote_pack_emotes_response::Emote, get_emote_packs_response::EmotePack,
    get_guild_channels_response::Channel, get_guild_invites_response::Invite,
    get_guild_list_response::GuildListEntry, permission::Mode, r#override::Reason,
    stream_events_request, Action, ActionPresentation, ActionType, Embed, Event, FieldPresentation,
    Override, PermissionList, Role,
};

// GUILD

client_api! {
    args: { name: String, picture_url: Option<Uri>, },
    action: CreateGuild,
    request_fields: {
        guild_name: name,
        picture_url: picture_url.map_or_else(String::default, |u| u.to_string()),
    },
    api_func: create_guild,
    service: core,
}

client_api! {
    args: { guild_id: u64, },
    action: GetGuild,
    api_func: get_guild,
    service: core,
}

client_api! {
    args: { guild_id: u64, },
    action: GetGuildInvites,
    api_func: get_guild_invites,
    service: core,
}

client_api! {
    args: { guild_id: u64, },
    action: GetGuildMembers,
    api_func: get_guild_members,
    service: core,
}

client_api! {
    args: { guild_id: u64, },
    action: GetGuildChannels,
    api_func: get_guild_channels,
    service: core,
}

client_api! {
    action: GetGuildList,
    api_func: get_guild_list,
    service: core,
}

client_api! {
    args: { guild_id: u64, homeserver: Uri, },
    action: AddGuildToGuildList,
    request_fields: {
        homeserver: homeserver.to_string(),
        = guild_id,
    },
    api_func: add_guild_to_guild_list,
    service: core,
}

client_api! {
    args: { guild_id: u64, homeserver: Uri, },
    action: RemoveGuildFromGuildList,
    request_fields: {
        homeserver: homeserver.to_string(),
        = guild_id,
    },
    api_func: remove_guild_from_guild_list,
    service: core,
}

client_api! {
    args: { guild_id: u64, new_guild_name: String, },
    request_type: UpdateGuildNameRequest,
    api_func: update_guild_name,
    service: core,
}

client_api! {
    args: { guild_id: u64, },
    request_type: DeleteGuildRequest,
    api_func: delete_guild,
    service: core,
}

client_api! {
    args: { invite_id: String, },
    action: JoinGuild,
    api_func: join_guild,
    service: core,
}

client_api! {
    args: { guild_id: u64, },
    request_type: LeaveGuildRequest,
    api_func: leave_guild,
    service: core,
}

// GUILD
// INVITE

client_api! {
    args: {
        name: String,
        guild_id: u64,
        possible_uses: i32,
    },
    action: CreateInvite,
    api_func: create_invite,
    service: core,
}

client_api! {
    args: { guild_id: u64, invite_id: String, },
    request_type: DeleteInviteRequest,
    api_func: delete_invite,
    service: core,
}

// INVITE
// CHANNEL

client_api! {
    args: {
        name: String,
        guild_id: u64,
        is_category: bool,
        previous_channel_id: Option<u64>,
        next_channel_id: Option<u64>,
    },
    action: CreateChannel,
    request_fields: {
        previous_id: previous_channel_id.unwrap_or_default(),
        next_id: next_channel_id.unwrap_or_default(),
        channel_name: name,
        = guild_id, is_category,
    },
    api_func: create_channel,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        before_message_id: Option<u64>,
    },
    action: GetChannelMessages,
    request_fields: {
        before_message: before_message_id.unwrap_or_default(),
        = guild_id, channel_id,
    },
    api_func: get_channel_messages,
    service: core,
}

client_api! {
    args: {
        new_channel_name: String,
        guild_id: u64,
        channel_id: u64,
    },
    request_type: UpdateChannelNameRequest,
    api_func: update_channel_name,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        previous_channel_id: Option<u64>,
        next_channel_id: Option<u64>,
    },
    request: UpdateChannelOrderRequest {
        previous_id: previous_channel_id.unwrap_or_default(),
        next_id: next_channel_id.unwrap_or_default(),
        channel_id, guild_id,
    },
    api_func: update_channel_order,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
    },
    request_type: DeleteChannelRequest,
    api_func: delete_channel,
    service: core,
}

// CHANNEL
// EMOTE

client_api! {
    args: { pack_name: String, },
    action: CreateEmotePack,
    api_func: create_emote_pack,
    service: core,
}

client_api! {
    action: GetEmotePacks,
    api_func: get_emote_packs,
    service: core,
}

client_api! {
    args: { pack_id: u64, },
    action: GetEmotePackEmotes,
    api_func: get_emote_pack_emotes,
    service: core,
}

client_api! {
    args: {
        pack_id: u64,
        image_id: String,
        name: String,
    },
    request_type: AddEmoteToPackRequest,
    api_func: add_emote_to_pack,
    service: core,
}

client_api! {
    args: {
        pack_id: u64,
        image_id: String,
    },
    request_type: DeleteEmoteFromPackRequest,
    api_func: delete_emote_from_pack,
    service: core,
}

client_api! {
    args: { pack_id: u64, },
    request_type: DeleteEmotePackRequest,
    api_func: delete_emote_pack,
    service: core,
}

client_api! {
    args: { pack_id: u64, },
    request_type: DequipEmotePackRequest,
    api_func: dequip_emote_pack,
    service: core,
}

// EMOTE
// MESSAGE

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        message_id: u64,
    },
    action: GetMessage,
    api_func: get_message,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        message_id: u64,
    },
    request_type: DeleteMessageRequest,
    api_func: delete_message,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        in_reply_to: Option<u64>,
        content: Option<String>,
        embeds: Option<Vec<Embed>>,
        actions: Option<Vec<Action>>,
        attachments: Option<Vec<Uri>>,
        overrides: Option<Option<Override>>,
    },
    action: SendMessage,
    request_fields: {
        in_reply_to: in_reply_to.unwrap_or_default(),
        content: content.unwrap_or_default(),
        embeds: embeds.unwrap_or_default(),
        actions: actions.unwrap_or_default(),
        attachments: attachments.unwrap_or_default().into_iter().map(|u| u.to_string()).collect(),
        overrides: overrides.unwrap_or_default(),
        = guild_id, channel_id,
    },
    api_func: send_message,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        message_id: u64,
        new_content: Option<String>,
        new_embeds: Option<Vec<Embed>>,
        new_actions: Option<Vec<Action>>,
        new_attachments: Option<Vec<Uri>>,
        new_overrides: Option<Option<Override>>,
    },
    request: UpdateMessageRequest {
        update_content: new_content.is_some(),
        update_embeds: new_embeds.is_some(),
        update_actions: new_actions.is_some(),
        update_attachments: new_attachments.is_some(),
        update_overrides: new_overrides.is_some(),
        content: new_content.unwrap_or_default(),
        embeds: new_embeds.unwrap_or_default(),
        actions: new_actions.unwrap_or_default(),
        attachments: new_attachments.unwrap_or_default().into_iter().map(|u| u.to_string()).collect(),
        overrides: new_overrides.unwrap_or_default(),
        guild_id, channel_id, message_id,
    },
    api_func: update_message,
    service: core,
}

// MESSAGE

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        message_id: u64,
        action_id: String,
        action_data: String,
    },
    request_type: TriggerActionRequest,
    api_func: trigger_action,
    service: core,
}

// PERMISSIONS

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        role_id: u64,
    },
    action: GetPermissions,
    api_func: get_permissions,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        check_for: String,
        as_user_id: Option<u64>,
    },
    action: QueryPermissions,
    request_fields: {
        r#as: as_user_id.unwrap_or_default(),
        = guild_id, channel_id, check_for,
    },
    api_func: query_has_permission,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        channel_id: u64,
        role_id: u64,
        permissions: PermissionList,
    },
    request: SetPermissionsRequest {
        guild_id, channel_id, role_id,
        perms: Some(permissions),
    },
    api_func: set_permissions,
    service: core,
}

// PERMISSIONS
// ROLE

client_api! {
    args: { guild_id: u64, },
    action: GetGuildRoles,
    api_func: get_guild_roles,
    service: core,
}

client_api! {
    args: { guild_id: u64, role: Role, },
    action: AddGuildRole,
    request_fields: {
        role: Some(role),
        = guild_id,
    },
    api_func: add_guild_role,
    service: core,
}

client_api! {
    args: { guild_id: u64, role_id: u64, },
    request_type: DeleteGuildRoleRequest,
    api_func: delete_guild_role,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        role: Role,
        modify_name: bool,
        modify_color: bool,
        modify_hoist: bool,
        modify_pingable: bool,
    },
    request: ModifyGuildRoleRequest {
        role: Some(role),
        guild_id,
        modify_name,
        modify_color,
        modify_hoist,
        modify_pingable,
    },
    api_func: modify_guild_role,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        role_id: u64,
        before_role_id: Option<u64>,
        after_role_id: Option<u64>,
    },
    action: MoveRole,
    request_fields: {
        before_id: before_role_id.unwrap_or_default(),
        after_id: after_role_id.unwrap_or_default(),
        = guild_id, role_id,
    },
    api_func: move_role,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        user_id: u64,
        give_role_ids: Vec<u64>,
        take_role_ids: Vec<u64>,
    },
    request_type: ManageUserRolesRequest,
    api_func: manage_user_roles,
    service: core,
}

client_api! {
    args: {
        guild_id: u64,
        user_id: u64,
    },
    action: GetUserRoles,
    api_func: get_user_roles,
    service: core,
}

// ROLE

client_api! {
    args: {
        requests: impl futures_util::stream::Stream<Item = stream_events_request::Request> + Send + Sync + 'static,
    },
    response: tonic::Streaming<Event>,
    request: requests.map(|r| StreamEventsRequest { request: Some(r) }),
    api_func: stream_events,
    service: core,
}
