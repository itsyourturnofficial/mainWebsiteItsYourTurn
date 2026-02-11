function openTab(tabId, evt) {
        const event = evt || window.event;
        document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));

        const target = document.getElementById(tabId);
        if (target) target.classList.add('active');

        try {
            const activator = event && (event.currentTarget || event.target);
            if (activator && activator.classList) activator.classList.add('active');
        } catch (e) {
            // silent fail if no event provided
        }
}
