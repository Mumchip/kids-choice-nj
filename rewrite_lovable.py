import re

def commit_callback(commit):
    bot_name = re.compile(br"lovable(\-dev)?\[bot\]", re.I)
    bot_email = re.compile(br"\d+\+lovable(\-dev)?\[bot\]@users\.noreply\.github\.com", re.I)

    if (bot_name.search(commit.author_name) or
        bot_name.search(commit.committer_name) or
        bot_email.search(commit.author_email) or
        bot_email.search(commit.committer_email)):

        commit.author_name = b"Mumchip"
        commit.committer_name = b"Mumchip"
        commit.author_email = b"91917105+Mumchip@users.noreply.github.com"
        commit.committer_email = b"91917105+Mumchip@users.noreply.github.com"
