import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardActions, Link } from '@mui/material';
import PfButton from '../PfButton';
import { useParams } from 'react-router-dom';

interface PfApplication {
  _id: string;
  ign: string;
  server: string;
  username: string;
  user: string;
}

export default function Applications() {
  const { id } = useParams<{ id: string }>();
  const [applications, setApplications] = useState<PfApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://localhost:4000/api/v1/applications/event/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data: PfApplication[]) => {
          setApplications(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
          setLoading(false);
        });
    }
  }, [id]);

  function acceptApplication(application: PfApplication) {
    fetch("http://localhost:4000/api/v1/applications/accept/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(application)
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // Remove the accepted application from the local state
      setApplications(prevApplications => 
        prevApplications.filter(app => app._id !== application._id)
      );
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }

  return (
    <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
      <Grid item xs={9}>
        {loading ? (
          <div>Loading...</div>
        ) : applications.length === 0 ? (
          <div>No applications yet</div>
        ) : (
          applications.map((application) => (
            <Card key={application._id} sx={{ maxWidth: "30%", margin: "10px" }}>
              <CardContent>
                <h2>IGN: <Link href={`/user/${application.user}`}>{application.ign}</Link></h2>
                <h3>Server: {application.server}</h3>
                <h3>Discord: {application.username}</h3>
              </CardContent>
              <CardActions>
                <PfButton text="Accept" action={() => acceptApplication(application)} />
              </CardActions>
            </Card>
          ))
        )}
      </Grid>
    </Grid>
  );
}
