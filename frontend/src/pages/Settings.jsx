import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Card from '../components/ui/Card';
import Loader from '../components/Loader';
import { useGetProfileQuery, useUpdateAdminMutation } from '../slices/adminApiSlice';

function Settings() {
  const { data: profile, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isSaving }] = useUpdateAdminMutation();

  const [theme, setTheme] = useState('system');
  const [followUpReminders, setFollowUpReminders] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);
  const [loadedProfile, setLoadedProfile] = useState(false);

  if (profile && !loadedProfile) {
    setLoadedProfile(true);
    setTheme(profile.theme || 'system');
    setFollowUpReminders(profile.notificationPrefs?.followUpReminders ?? true);
    setWeeklySummary(profile.notificationPrefs?.weeklySummary ?? false);
  }

  const saveHandler = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({
        theme,
        notificationPrefs: { followUpReminders, weeklySummary },
      }).unwrap();
      toast.success('Settings saved');
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to save settings');
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout title="Settings">
        <Loader />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Settings">
      <h4 className="mb-3" style={{ color: 'var(--admin-color-navy)' }}>Settings</h4>

      <div className="d-flex flex-column gap-3">
        <Card title="Appearance">
          <Form.Group>
            <Form.Label>Theme</Form.Label>
            <Form.Select value={theme} onChange={(e) => setTheme(e.target.value)} style={{ maxWidth: 240 }}>
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Form.Select>
          </Form.Group>
        </Card>

        <Card title="Notification Preferences">
          <Form.Check
            type="switch"
            id="followUpReminders"
            label="Follow-up reminders"
            checked={followUpReminders}
            onChange={(e) => setFollowUpReminders(e.target.checked)}
            className="mb-2"
          />
          <Form.Check
            type="switch"
            id="weeklySummary"
            label="Weekly summary"
            checked={weeklySummary}
            onChange={(e) => setWeeklySummary(e.target.checked)}
          />
        </Card>

        <Card title="Account &amp; Security">
          <p className="text-muted mb-2">Update your name, email, phone, or password from your profile page.</p>
          <Link to="/profile" className="btn btn-outline-secondary btn-sm">Go to Profile</Link>
        </Card>

        <div>
          <Button variant="primary" onClick={saveHandler} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save Settings'}
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
