module.exports = {
    groupId: 13168545,
    maximumRank: 16,
    prefix: '-',
    logChannelId: '938595871577243668',
    shoutChannelId: '938595871577243668',
    auditLogChannelId: '938595871577243668',
    legacyCommands: true,
    colors: {
        info: '#5b57d9',
        error: '#de554e',
        neutral: '#f2f255',
        success: '#ff3434'
    },
    verificationChecks: true,
    firedRank: 1,
    xpRankup: {
        enabled: false,
        roles: [
            // Example: {
            //     rank: 2,
            //     xpNeeded: 10
            // }
        ]
    },
    memberCount: {
        enabled: false,
        groupIconURL: '',
        channelId: '',
        milestones: []
    },
    antiAbuse: {
        enabled: false,
        bypassRank: 255,
        duration: 120,
        threshold: 5,
        actionRank: null,
        actionLogChannelId: ''
    }
}
